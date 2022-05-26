import { useState } from 'react';
import {useStateWithLocalStorage} from './useStateWithLocalStorage';
import {api} from '../API/shrtcode'

export function useUrls () {
    const [ appError, setAppError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ results, setResults ] = useStateWithLocalStorage('results');

    const submitUrl = async (url) => {
        setIsLoading(true);
        try {
            setAppError('');
            const {data} = await api.get('/shorten', { 
                params: {
                    url: url.trim()
                }
            })
            setIsLoading(false);
            setResults(results => [data, ...results]);

        } catch (e) {
            setIsLoading(false);
            setAppError('Something went wrong. Check if URL is correct and try again.')
        }
    }

    return { appError, isLoading, results, submitUrl, setResults };
}