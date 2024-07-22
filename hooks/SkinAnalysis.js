
export const dataFunction=(latestAnalysisData)=>{
    const data = [
        {
          id: '1',
          image1: require('../assets/images/HydrationIcon.png'),
          progress: latestAnalysisData?.hydration,
          text: 'Hydration',
          Desciption: latestAnalysisData?.descriptions?.hydration?.description,
          Header: "Your Hydration",
          Deatil: latestAnalysisData?.descriptions?.oilness?.description,
        },
        {
          id: '2',
          image1: require('../assets/images/OilLevelIcon.png'),
          progress: latestAnalysisData?.oilness,
          text: 'Oiliness',
          Desciption: latestAnalysisData?.descriptions?.oilness?.description,
          Header: "Your Oiliness",
          Deatil: latestAnalysisData?.descriptions?.oilness?.description,
        },
        {
          id: '3',
          image1: require('../assets/images/ElasticityIcon.png'),
          progress: latestAnalysisData?.elastcity,
          text: 'Elasticity',
          Desciption: latestAnalysisData?.descriptions?.oilness?.description,
          Header: "Your Elasticity",
          Deatil: latestAnalysisData?.descriptions?.oilness?.description,
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