import {useContext} from 'react';
import { authContext } from '../Contexts/AuthContext';

export function useAuth() {
    const value = useContext(authContext);

    return value;
}