import React, { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
import getStands from '../../api/getStands';
import ChoiceBoxSelect from '../../reusables/ChoiceBoxSelect';

const Section = ({ series, stands }) => {
  const [selected, setSelected] = useState(stands[0]);

  return (
    <div>
      <h1>{series}</h1>
    <ChoiceBoxSelect
      value={selected}
      options={stands}
      onChange={setSelected}
      keyBy={stand => stand.id}
      imageBy={stand => stand.thumbnail}
      labelBy={stand => `${stand.name} (${stand.user})`}
    />
    </div>
  )
}

const BetterStandsPage = () => {
  const [standsBySeries, setStands] = useState([]);

  useEffect(() => {
    getStands().then(stands => {
      const bySeries = groupBy(stands, 'series');

      setStands(bySeries);
    });
  }, []);

  const sections = Object
    .entries(standsBySeries)
    .map(([series, stands]) => (
      <Section
        key={series}
        series={series}
        stands={stands}
      />
    ))

  return <>{sections}</>;
};

export default BetterStandsPage;
