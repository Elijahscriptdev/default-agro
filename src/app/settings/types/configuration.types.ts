export type PostConfiguration = {
    perform_check: boolean | null,
    check_id: number,
    fail_final_result: boolean | null
}


export type Configuration = {
    id: number,
    name: string,
    configurations: {
        perform_check: number,
        check_id: number,
        fail_final_result: number
    } | null
}