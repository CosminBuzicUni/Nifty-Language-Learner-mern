const CreateUserPage = () => {
    return (
        <div>
        <h1>Create User</h1>
        <form>
            <label>
            Username:
            <input type="text" name="username" />
            </label>
            <br />
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Create User</button>
        </form>
        </div>
    );
    }
    export default CreateUserPage;