
function AddMovie () {

    function submitForm(){


        history.push('/')
    } //end Submit Form

    return (
        <div>
            <h1>What Movie Would You Like to Add?</h1>

            <form onSubmit={submitFrom}>
                <input type="text" placeholder=""/>


            </form>
        </div>
        
        
    );
}

export default AddMovie;