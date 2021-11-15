import Userlist from '../user/index';

function Memberlist(props) {
    return (
        <div className='container'>
            <div className="row mt-5">
                <h2 className="mb-5 text-secondary text-center">MEMBER LIST</h2>
                <Userlist />
            </div>
        </div>
    );
}

export default Memberlist;