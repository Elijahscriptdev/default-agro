import axios, { AxiosResponse } from "axios";
import { useState } from "react"
import { useToasts } from 'react-toast-notifications';
import { FiCopy, FiEye, FiEyeOff } from 'react-icons/fi';
import config from "../../../config";
import Drawer from "../../layout/Drawer"
import useStore from "../../auth/store/authStore";
import { useProfile } from '../../profile/helpers/data';
import LoadingSpinner from "../../../components/LoadingSpinner";

const Developer = () => {
    const [loading, setLoading] = useState({ generateKey: false, saveWebhook: false })
    const [isVisible, setVisible] = useState(false)
    const [apiKey, setApiKey] = useState("")
    const [webhook, setWebhook] = useState('')

    const token = useStore(state => state.token)

    const { addToast } = useToasts();

    const setData = (apiKey: string, webhook: string) => {
        setApiKey(apiKey)
        setWebhook(webhook)
    }

    useProfile(token, setData)

    const generateKey = async () => {

        setLoading(() => ({ ...loading, generateKey: true }))

        try {
            const res: AxiosResponse<any> = await axios.get(`${config.baseUrl}/generate-key`, { headers: { 'Authorization': `Bearer ${token}` } });
            addToast("Your password has been updated successfully", { appearance: 'success' });
            setLoading(() => ({ ...loading, generateKey: false }))
            setApiKey(res.data.data.secret_key)
        }
        catch (e: any) {
            addToast(e.response.data.message, { appearance: 'error' });
            setLoading(() => ({ ...loading, generateKey: false }))
        }
    }
    const saveWebhook = async () => {
        setLoading(() => ({ ...loading, saveWebhook: true }))

        const data = { webhook }

        try {
            const res: AxiosResponse<any> = await axios.post(`${config.baseUrl}/save-webhook`, data, { headers: { 'Authorization': `Bearer ${token}` } });
            addToast("Your webhook has been saved successfully", { appearance: 'success' });
            setLoading(() => ({ ...loading, saveWebhook: false }))

            setWebhook(res.data.data.webhook)
        }
        catch (e: any) {
            addToast(e.response.data.message, { appearance: 'error' });
            setLoading(() => ({ ...loading, saveWebhook: false }))
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(apiKey);
        addToast("Copied to clipboard", { appearance: 'success' });
    }
    return (
        <div className="flex flex-row">
            <Drawer />
            <div className="flex flex-row w-4/5 flex-grow">
                <div className="w-full md:px-8 p-2 space-y-20">
                    <div>
                        <p className="font-semibold mb-2 text-sm">API Key</p>
                        <div className="md:flex justify-between items-center">
                            <div className="md:w-3/5 w-full flex space-x-4">
                                <div className="w-full">
                                    <input
                                        value={apiKey}
                                        readOnly
                                        type={isVisible ? 'text' : 'password'}
                                        className={`${isVisible ? 'hidden' : 'block'} bg-white rounded-md h-10 px-4 w-full border border-gray-300 focus:ring-green-500 focus:outline-none focus:ring-1 focus:border-transparent`}
                                    />
                                    <div className={`w-full flex justify-between border border-gray-300 rounded-md ${isVisible ? 'block' : 'hidden'} h-10 pl-4`}>
                                        <div className="flex flex-col justify-center ">{apiKey}</div>
                                        <button onClick={copyToClipboard} className="bg-green-500 text-white p-2 rounded-sm hover:bg-green-700">
                                            <FiCopy />
                                        </button>
                                    </div>

                                </div>

                                <button onClick={() => setVisible((visible) => !visible)}>
                                    {isVisible ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                            <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 my-4 md:my-0">
                                View Documentation
                            </button>
                        </div>
                        <button disabled={loading.generateKey} onClick={generateKey} type="submit" className="bg-green-500 text-white p-2 md:w-1/6 w-1/3 rounded-md hover:bg-green-700 mt-4 disabled:opacity-50">
                            {loading.generateKey ? <LoadingSpinner size={"6"} /> : 'Generate Key'}
                        </button>
                    </div>
                    <div>

                        <p className="font-semibold mb-2 text-sm">Webhook URL</p>
                        <div className="md:w-3/5 w-full">
                            <input
                                value={webhook}
                                onChange={(e) => setWebhook(e.target.value)}
                                placeholder="Enter webhook URL"
                                type="text"
                                className={`bg-white rounded-md h-10 px-4 w-full border border-gray-300 focus:ring-green-500 focus:outline-none focus:ring-1 focus:border-transparent`}
                            />
                        </div>
                        <button disabled={!webhook || loading.saveWebhook} onClick={saveWebhook} className="md:w-1/6 w-1/2 bg-green-500 text-white p-2 rounded-md hover:bg-green-700 mt-4 disabled:opacity-50">
                            {loading.saveWebhook ? <LoadingSpinner size={"6"} /> : 'Save Webhook URL'}
                        </button>
                    </div>

                </div>

            </div>
        </div >
    )

}

export default Developer


