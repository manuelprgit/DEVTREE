import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/DevTreeAPI";
import { Devtree } from "../components/Devtree";

export default function AppLayout() {

    const {data, isError, isLoading} = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1, //cantidad de veces que volvera a hacer la peticion
        refetchOnWindowFocus: false //Refresca cada vez que hace foco en la pantalla
    })

    if(isLoading) return 'Loading...';

    if(isError) return <Navigate to={'/auth/login'}/>;

    if(data) return <Devtree data={data} />
}