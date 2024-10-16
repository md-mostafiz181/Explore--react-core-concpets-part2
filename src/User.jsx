import "./User.css"

const User = ({user}) => {

    console.log(user)

    const {name,email}= user ;

    return (
        <div className="user-box">
            <h5>Name : {name} </h5>
            <h6>Email : {email}</h6>
            
        </div>
    );
};

export default User;