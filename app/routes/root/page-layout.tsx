import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
    const navigate = useNavigate();

  const handleLogout = async () =>{
    await logoutUser();
    navigate('/sign-in');
    console.log('user logged out');
  }
  return (
    <div>
        <button onClick={handleLogout} className="cursor-pointer">
                <img
                src="/assets/icons/logout.svg" alt="logout"
                className="size-6"/>
              </button>
              <button onClick={() => {navigate('/dashboard')}}>
                Dashboard
              </button>
    </div>
  )
}

export default PageLayout