import React, { useState, useEffect } from 'react';
import getStands from '../../../api/getStands';
import BoxSection from './ChoiceBoxSection';
import Box from './ChoiceBox';

const Stands = () => {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    getStands().then(results => setStands(results));
  }, []);

  return (
    <BoxSection>
      {
        stands.map(stand => (
          <Box>
            <img src={stand.thumbnail}  alt="stand" />
            <h2>{stand.user}</h2>
          </Box>
        ))
      }
    </BoxSection>
  )
};

export default Stands;
