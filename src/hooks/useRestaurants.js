//We use Hooks to extract some amount logic in this case Api logic that will be used to another components
import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    //  Not how we didnt compy the first const [term setTerm] = (''); this code is not part of the Api code
    const [restaurants, setRestaurants] = useState([]); //useState something that updates, so this is the part of API 
    const [errorMessage, setErrorMessage] = useState('');

        // We are doing API network request here
    const searchApi = async (searchTerm) => {
        console.log("hi there");
        try {
            const response = await yelp.get('/search', {
                params: { //paramaters
                    limit: 50,
                    term: searchTerm, //if any param are idential like here term=term, it is enough just to put term,
                    location: 'saint louis'
                }
            });
            setRestaurants(response.data.businesses); //we just want the businesses data results
        } catch (err) {
            setErrorMessage('Something went wrong!');
        }
    };

    // Call search API when component
    // is first rendered.  BAD CODE:
    // searchApi('pasta'); this will call it infinite time...BAD code
    //use Hooks  to call Api JUST one time or multiple time depending on the second argument like useEffect() . GOOD code!
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, restaurants, errorMessage]
};