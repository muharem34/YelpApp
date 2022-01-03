import axios from axios;

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XIdWG61e3aU-6McyXVzpxEFXqWukDto_TFlS0W2OPQ2oyo-zCNE5Q_8E74vcxgfy5CUvt7g6d029hFb9BN2D2UbA_tK3zHyX2tq-axO4_uco0P8TE_Iuasb8X8zPYXYx'
    }
});