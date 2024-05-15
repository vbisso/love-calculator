interface Props {
    name: string;
    value: string;
    placeHolder: string
    setSName: (value: string) => void
}
function Inputs({ name, value, setSName, placeHolder }: Props) {
    return (
        <div className="form-floating m-3 me-md-3">
            <input
                id={name}
                value={value}
                type="text"
                onChange={(e) => setSName(e.target.value)}
                className="form-control"
                placeholder={placeHolder}
            />
            <label htmlFor={name}>{placeHolder}</label>
        </div>
    )
}

export default Inputs