import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";

const { Meta } = Card;

const ConnectNav = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth && auth.user;

  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{user && user.name[0]}</Avatar>}
          title={user && user.name}
          description={user && `Joined ${moment(user.createdAt).fromNow()}`}
        />
      </Card>
      {auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled && (
        <>
          <div>Pending Balance</div>
          <div>Payout Settings</div>
        </>
      )}
    </div>
  );
};

export default ConnectNav;

// auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled

// import { useSelector } from "react-redux";
// import { Card, Avatar } from "antd";
// import moment from "moment";

// const { Meta } = Card;

// const ConnectNav = () => {
//   const { auth } = useSelector((state) => ({ ...state }));
//   const { user } = auth;

//   return (
//     <div className="d-flex justify-content-around">
//       <Card>
//         <Meta 
//             avatar={<Avatar>{user.name[0]}</Avatar>}
//             title={user.name}
//             description={`Joined ${moment(user.createdAt).fromNow()}`}
//         />
//       </Card>
//       {auth && auth.user && (
//         <>
//             <div>Pending Balance</div>
//             <div>Payout Settings</div>
//         </>
//       )}
//     </div>
//   )
// }

// export default ConnectNav;
