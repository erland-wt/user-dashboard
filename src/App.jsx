import { useState, useEffect, useMemo } from "react";
import useUsers from "./hooks/useUsers";

import UserList from "./components/UserList";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";
import ErrorBoundary from "./components/ErrorBoundary";

const USERS_PER_PAGE = 3;

function App() {
  const {users, loading, error} = useUsers();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  
  const filteredUsers = useMemo(() => {
    return users.filter((user) => 
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;
    
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  if (loading) {
    return <p className="loading-users">Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  return (
    <div className="app-container">
      <h1>User Dashboard</h1>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search user..."
      />

      <ErrorBoundary>
        <UserList users={paginatedUsers}/>
      </ErrorBoundary>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      
    </div>
  );
}

export default App;