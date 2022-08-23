import { useCallback, useMemo, useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import Drawer from "../../layout/Drawer";
import ConfigurationTable from '../components/ConfigurationTable';
import { useConfigurations } from '../helpers/data';
import { Configuration, PostConfiguration } from '../types/configuration.types';
import config from '../../../config';
import useStore from '../../auth/store/authStore';

const ConfigurationPage = () => {

    const { addToast } = useToasts()

    const [newConfigurations, setNewConfigurations] = useState<PostConfiguration[]>([])
    const [submitting, setSubmitting] = useState(false)

    const { data: configurations, isLoading, refetch } = useConfigurations()

    const token = useStore(state => state.token)

    const data = useMemo(() => configurations || [], [configurations])


    const handleChecked = useCallback((value: string, original: Configuration) => {

        let findNewConfiguration = newConfigurations.find((configuration) => configuration.check_id === original.id)

        if (!findNewConfiguration) {
            const failFinalResult = original.configurations?.fail_final_result
            const configuration: PostConfiguration = {
                perform_check: parseInt(value) === 1 ? true : false,
                check_id: original.id,
                fail_final_result: failFinalResult ? failFinalResult === 1 ? true : false : null
            }
            setNewConfigurations((configurations) => [...configurations, configuration])
            return
        }
        // it was there previously, change the value

        findNewConfiguration.perform_check = parseInt(value) === 1 ? true : false

        //filter out old configuration
        const filtered = newConfigurations.filter((configuration) => configuration.check_id !== original.id)
        //add new configuration
        setNewConfigurations([...filtered, findNewConfiguration!])

    }, [newConfigurations])



    const handleSelectFailResult = useCallback(
        (value: string, original: Configuration) => {
            let findNewConfiguration = newConfigurations.find((configuration) => configuration.check_id === original.id)

            if (!findNewConfiguration) {
                const performCheck = original.configurations?.perform_check
                const configuration: PostConfiguration = {
                    check_id: original.id,
                    fail_final_result: parseInt(value) === 1 ? true : false,
                    perform_check: performCheck ? performCheck === 1 ? true : false : null

                }

                setNewConfigurations((configurations) => [...configurations, configuration])
                return
            }

            findNewConfiguration.fail_final_result = parseInt(value) === 1 ? true : false
            const filtered = newConfigurations.filter((configuration) => configuration.check_id !== original.id)
            setNewConfigurations([...filtered, findNewConfiguration!])

        },
        [newConfigurations],
    );


    const showChecked = useCallback((original: Configuration, value: number, check: boolean) => {
        const findNewConfiguration = newConfigurations.find((configuration) => configuration.check_id === original.id)
        if (!findNewConfiguration) {
            if (original.configurations?.fail_final_result != null) {
                return original.configurations.fail_final_result === value
            }
            return undefined
        }
        else {
            return findNewConfiguration.fail_final_result === check
        }
    }, [newConfigurations])



    const showSwitchChecked = useCallback((original: Configuration, value: number, check: boolean) => {
        const findNewConfiguration = newConfigurations.find((configuration) => configuration.check_id === original.id)
        if (!findNewConfiguration) {
            if (original.configurations?.perform_check != null) {
                return original.configurations.perform_check === value
            }
            return undefined

        }
        else {
            return findNewConfiguration.perform_check === check
        }
    }, [newConfigurations])



    const submit = async () => {
        if (!newConfigurations.length) {
            addToast("Please select your settings", { appearance: 'warning' });
            return
        }
        setSubmitting(true)
        try {
            await axios.post(`${config.baseUrl}/configuration`, { configuration: newConfigurations }, { headers: { 'Authorization': `Bearer ${token}` } })
            setSubmitting(false)
            addToast("Your settings have been saved", { appearance: 'success' });
            refetch()
        }
        catch (e: any) {
            setSubmitting(false)
            addToast(e.response.data.message, { appearance: 'error' });
        }
    }


    const columns = useMemo(
        () => [
            {
                Header: "Check",
                accessor: "name",
            },
            {
                Header: "Perform Check",
                Cell: ({ row }: any) => {
                    const { original } = row;
                    return (
                        <div className="flex space-x-4">
                            <div className="flex space-x-2 items-center">
                                <input onChange={(e) => handleChecked(e.target.value, original)} checked={showSwitchChecked(original, 1, true)} type="radio" name={`perform-check-${original.id}`} value={1} className="checked:bg-green-600 checked:border-transparent" />
                                <span>Yes</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <input onChange={(e) => handleChecked(e.target.value, original)} checked={showSwitchChecked(original, 0, false)} type="radio" name={`perform-check-${original.id}`} value={0} className="checked:bg-green-600 checked:border-transparent" />
                                <span>No</span>
                            </div>
                        </div>
                    );
                },
            },
            {
                Header: "Fail Final Result",
                Cell: ({ row }: any) => {
                    const { original } = row;
                    return (
                        <div className="flex space-x-4">
                            <div className="flex space-x-2 items-center">
                                <input onChange={(e) => handleSelectFailResult(e.target.value, original)} checked={showChecked(original, 1, true)} type="radio" name={`fail-result-${original.id}`} value={1} className="checked:bg-green-600 checked:border-transparent" />
                                <span>Yes</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <input onChange={(e) => handleSelectFailResult(e.target.value, original)} checked={showChecked(original, 0, false)} type="radio" name={`fail-result-${original.id}`} value={0} className="checked:bg-green-600 checked:border-transparent" />
                                <span>No</span>
                            </div>
                        </div>
                    );
                },
            },
        ],
        [showChecked, handleSelectFailResult, showSwitchChecked, handleChecked],
    );
    return (
        <div className="flex flex-row">
            <Drawer />
            <div className="w-4/5 flex-grow px-4 py-8">
                <div className="flex justify-between items-center">
                    <h2 className='text-xl text-black-500 font-bold mb-5'>Configuration</h2>
                    <button disabled={!newConfigurations.length} onClick={() => submit()} className="bg-green-500 text-white p-4 rounded-md hover:bg-green-700">
                        {submitting ? <LoadingSpinner size={"6"} /> : 'Save Changes'}
                    </button>
                </div>


                <ConfigurationTable columns={columns} data={data} loading={isLoading} />

            </div>
        </div>
    )
}

export default ConfigurationPage;