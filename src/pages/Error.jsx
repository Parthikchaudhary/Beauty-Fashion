import { useNavigate, useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError();
    const navigate =  useNavigate();

    const handleGoback = () => {
        navigate(-1);
        // navigate("/");
    }

    if(error.status === 404) {
    return(
        <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0 text-center p-4" style={{ maxWidth: '500px', borderRadius: '20px' }}>
        <img
          src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
          alt="404 Not Found"
          className="img-fluid mb-4"
          style={{ borderRadius: '10px' }}
        />
        <h2 className="text-danger fw-bold">404 - Page Not Found</h2>
        <p className="text-muted">Oops! The page you’re looking for doesn’t exist or has been moved.</p>
        <button onClick={handleGoback} className="btn btn-danger mt-3 px-4 py-2 fw-semibold shadow-sm">
          Go Back 
        </button>
      </div>
    </div>
        </>
    )
}
}