import Button from "./style";
import { useSelector } from "react-redux";

function Index() {
  const news = useSelector((state) => state.news);

  const renderView = () => {
    if (news) {
      return (
        <>
          <div>userId: {news.userId}</div>
          <div>id: {news.id}</div>
          <div>title: {news.title}</div>
        </>
      );
    }
  };

  return (
    <>
      <Button />
      {renderView()}
    </>
  );
}

export default Index;
