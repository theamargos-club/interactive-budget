const SectionWizard = ({ content, page, previousPage, nextPage }) => {
  return (
    <div style={{width: "50%", marginTop: "10%"}}>
      <div>{content}</div>
      <div style={{ display: "flex"}}>
        {page > 1 && <div style={{ margin: "1%"}}><button onClick={previousPage}>Atras</button></div>}
        {page < 3 && <div style={{ margin: "1%"}}><button onClick={nextPage}>Siguiente</button></div>}
      </div>
    </div>
  );
};

export default SectionWizard;
