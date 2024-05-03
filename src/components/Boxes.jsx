import Box from "./Box";
const Boxes = ({ data }) => {
  return (
    <>
  {data.map((content)=> (
    <Box key={content.id} data={content} />
  ))}
    </>
  );
};

export default Boxes;
