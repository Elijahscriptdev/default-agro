type LoadingSpinnerProps = {
    color?: string,
    size?: string
}


const LoadingSpinner = (props: LoadingSpinnerProps) => {

    const { color = 'border-white' } = props;

    return (
        <div className="flex justify-center items-center">
            <div className={`animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 ${color}`}></div>
        </div>
    )

}

export default LoadingSpinner