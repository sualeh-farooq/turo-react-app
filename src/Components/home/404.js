import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export function NotFound  ()  {
    const navigate = useNavigate()
    const PageNav = (loc) =>{
        navigate(loc)
    }
    return  <>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    //   extra={<Button onClick={()=>navigate('/home')} type="primary">Back Home</Button>}
      extra={<Button onClick={()=>PageNav('/')} type="primary">Back Home</Button>}
      />
    </>
};  