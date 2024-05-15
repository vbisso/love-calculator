interface Props {
    result: string;
}

const Results = ({ result }: Props) => {
    return (
        <div className="alert alert-light mx-auto mt-3" hidden id="results">
            {result}
        </div>
    );
};

export default Results;
