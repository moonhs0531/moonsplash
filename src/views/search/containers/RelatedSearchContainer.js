import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import SearchScrollMenu from "../components/SearchScrollMenu";
import {useParams} from "react-router-dom";
import axios from "axios";
import {ContentContainer} from "../../shared/layout/Layout.Styled";

function RelatedSearchContainer() {

    const {query} = useParams();
    const [relatedSearches, setRelatedSearches] = useState([]);

    const searchRelated = useCallback(async () => {
            const config = {
                url: 'https://api.unsplash.com/search',
                method: 'get',
                params: {
                    query
                },
                headers: {
                    Authorization: 'Client-ID a8pR4zifcQaz3GEVTfinqVtgeFZ6zXS5mpr8fZ_b-7M',
                },
            }

            const result = await axios(config);
            setRelatedSearches(result.data.related_searches);
        },[query]
    )
    useEffect(() => {
        searchRelated();
    }, [searchRelated])

    return(
        <Container>
            <ContentContainer>
                <SearchScrollMenu data={relatedSearches}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default RelatedSearchContainer;
