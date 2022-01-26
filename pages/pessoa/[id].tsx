import {useRouter} from 'next/router'
const Id  = () =>{
    const {id} = useRouter().query;
  return (
    <div>
      <h1>IdNome {id} </h1>
    </div>
  );
}

export  default Id;