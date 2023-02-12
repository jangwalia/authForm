import Card from "./Card";

export const User = () => {
  return (
    <Card>
      <form>
        <div className="flex flex-col justify-between p-2">
          <label htmlFor="username">Enter Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>

        <div className="flex flex-col justify-between p-2">
          <label htmlFor="age">Enter Your Age</label>
          <input type="text" id="age" placeholder="Age" />
        </div>

        <button type="submit" className="bg-indigo-500 mt-5 rounded-2xl w-20">
          Add User
        </button>
      </form>
    </Card>
  );
};
