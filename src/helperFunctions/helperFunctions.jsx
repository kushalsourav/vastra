
export const filterBySort = (list, sort, rating, range) => {
    let returnData = [...list];
    if (sort === "HIGH_TO_LOW") {
      returnData = returnData.sort((a, b) => b.price - a.price);
    }
    if (sort === "LOW_TO_HIGH") {
      returnData = returnData.sort((a, b) => a.price - b.price);
    }
    if (rating === "FIVE") {
      returnData = returnData.filter(({ rating }) => rating >= 4);
    }
    if (rating === "FOUR") {
      returnData = returnData.filter(({ rating }) => rating >= 3);
    }

    if (rating === "THREE") {
      returnData = returnData.filter(({ rating }) => rating >= 2);
    }
    if (rating === "TWO") {
      returnData = returnData.filter(({ rating }) => rating >= 1);
    }
    if(range) {
      returnData = returnData.filter(({price}) => price <= range )
    }
    return returnData;
  };
  