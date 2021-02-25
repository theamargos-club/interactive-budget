import React, { useContext } from 'react';
import { updateOption, updatePage } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';

const SectionWizard = ({ content }) => {
  const { state, dispatch } = useContext(AppContext);

  const onPreviousPage = () => {
    dispatch(updatePage(state.page - 1))
    dispatch(updateOption(1))
  }

  const onNextPage = () => {
    dispatch(updatePage(state.page + 1))
  }

  const onFinish = () => {
    const data = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      budget: state.budget
    }
    alert(data)
  }

  return (
    <div style={{ width: "50%", marginTop: "3%" }}>
      <div>{content}</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {
          state.page > 1 && <div style={{ margin: "1%" }}>
            <button type="button" className="btn btn-primary" onClick={onPreviousPage}>Atras</button>
          </div>
        }
        {
          state.page < 3 && <div style={{ margin: "1%" }}>
            <button type="button" className="btn btn-primary" onClick={onNextPage}>Siguiente</button>
          </div>
        }
        {
          state.page === 3 && <div style={{ margin: "1%" }}>
            <button type="button" className="btn btn-primary" onClick={onFinish}>Finalizar</button>
          </div>
        }
      </div>
    </div>
  );
};

export default SectionWizard;
