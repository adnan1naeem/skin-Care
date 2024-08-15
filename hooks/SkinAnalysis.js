
export const dataFunction=(latestAnalysisData)=>{
    const data = [
        {
          id: '1',
          image1: require('../assets/images/HydrationIcon.png'),
          progress: latestAnalysisData?.hydration,
          text: 'Hydration',
          Desciption: latestAnalysisData?.descriptions?.hydration?.description,
          Header: "Hydration",
          parameter:"hydration",
          level: latestAnalysisData?.descriptions?.hydration?.level,
          Deatil: latestAnalysisData?.descriptions?.hydration?.detail,
        },
        {
          id: '2',
          image1: require('../assets/images/OilLevelIcon.png'),
          progress: latestAnalysisData?.oilness,
          text: 'Oiliness',
          Desciption: latestAnalysisData?.descriptions?.oilness?.description,
          Header: "Oiliness",
          parameter:"oilness",
          level: latestAnalysisData?.descriptions?.oilness?.level,
          Deatil: latestAnalysisData?.descriptions?.oilness?.detail,
        },
        {
          id: '3',
          image1: require('../assets/images/ElasticityIcon.png'),
          progress: latestAnalysisData?.elastcity,
          text: 'Elasticity',
          Desciption: latestAnalysisData?.descriptions?.elasticity?.description,
          Header: "Elasticity",
          parameter:"elasticity",
          level: latestAnalysisData?.descriptions?.elasticity?.level,
          Deatil: latestAnalysisData?.descriptions?.elasticity?.detail,
        },
        {
          id: '4',
          image1: require('../assets/images/Recycle.png'),
          Year: latestAnalysisData?.skinAge,
          text: 'Skin Age',
        },
      ];
      return data;
}

 export const EmyptyStatedata = [
      {
        id: '1',
        image1: require('../assets/images/HydrationIcon.png'),
        progress: 0,
        text: 'Hydration',
        Desciption: null,
        Header: "Hydration",
        level: null,
        Deatil: null,
      },
      {
        id: '2',
        image1: require('../assets/images/OilLevelIcon.png'),
        progress: 0,
        text: 'Oiliness',
        Desciption: null,
        Header: "Oiliness",
        level: null,
        Deatil: null,
      },
      {
        id: '3',
        image1: require('../assets/images/ElasticityIcon.png'),
        progress: 0,
        text: 'Elasticity',
        Desciption: null,
        Header: "Elasticity",
        level: null,
        Deatil: null,
      },
      {
        id: '4',
        image1: require('../assets/images/Recycle.png'),
        Year: 0,
        text: 'Skin Age',
      },
    ];
