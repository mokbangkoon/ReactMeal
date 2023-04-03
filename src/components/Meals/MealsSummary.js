import classes from './MealsSummary.module.css';
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식, 배달해드립니다.</h2>
      <p>
        메뉴중에서 좋아하는 음식을 선택해 보세요. 그리고 점심, 저녁을 즐기세요
      </p>
      <p>
        모든 음식은 양질의 영양분을 함유하고 있으며 숙련된 셰프가 조리합니다.
      </p>
    </section>
  );
};
export default MealsSummary;
