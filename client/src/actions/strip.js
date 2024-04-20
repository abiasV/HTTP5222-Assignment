import axios from "axios";

export const createConnectAccount  = async (token) => {
    return (
        await axios.post(
            `${import.meta.env.VITE_APP_API}/create-connect-account`, 
            {},
            {
                headers: {
                    Authorization : `Bearer ${token}`,
                },
            }
        )
    )
};


// import axios from 'axios';

// const token = 'KJHTREYUO056847856LJFHJDR12FGDEN';

// axios.post('http://localhost:8000/api/create-connect-account', {
//   // Your request data here
// }, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })
// .then(response => {
//   console.log(response);
// })
// .catch(error => {
//   console.error(error);
// });
