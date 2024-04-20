import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
	const dispatch = useDispatch();
	// const { auth } = useSelector((state) => ({ ...state }));
	const auth = useSelector((state) => state.auth);
	console.log("Redux State (Auth):", auth);
	
	const history = useNavigate();

	const logout = () => {
		dispatch({
			type: "LOGOUT",
			payload: null,
		});
		window.localStorage.removeItem("auth");
		history("/login");
	};

	return (
    <div className="header nav d-flex justify-content-evenly">
			<Link className="nav-link" to="/">
				Home
			</Link>

			{auth !== null && (
					<Link className="nav-link" to="/dashboard">
						Dashboard
					</Link>
			)}

			{auth !== null && (
				<a className="nav-link" onClick={logout}>
					Logout
				</a>
			)}

			{auth === null && (
				<>
					<Link className="nav-link" to="/login">
						Login
					</Link>
					<Link className="nav-link" to="/register">
						Register
					</Link>
				</>
			)}
		</div>
	);
};

export default TopNav;