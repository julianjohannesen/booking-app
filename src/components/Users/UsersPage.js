import UserPicker from "./UserPicker";
import UsersList from "./UsersList";

export default function UsersPage () {
    return (
      <main className="users-page">
        <UsersList/>
        <UserPicker/>
      </main>
    );
  }