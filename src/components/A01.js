function A01 () {
    const data = ['Angular', 'React', 'Vue']
    console.log(this);
    return (
        <div>
            <ul>
                {
                    data.map((value, index) => {
                        return <li key={ index }>{ value }</li>
                    })
                }
            </ul>
        </div>
    );
}

export default A01;