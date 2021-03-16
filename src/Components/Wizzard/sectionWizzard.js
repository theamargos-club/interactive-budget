import React, { useContext } from 'react';
import { updateLastPage, updatePage } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';

const SectionWizard = ({ content }) => {
  const { state, dispatch } = useContext(AppContext);

  const onPreviousPage = () => {
    dispatch(updatePage(state.page - 1))
  }

  const onNextPage = () => {
    if(state.page === 2 && state.options.length === 0){
      alert("Para continuar debe seleccionar al menos 1 opción")
    } else {
      dispatch(updatePage(state.page + 1))
      let check = ((Number(state.page) + Number(state.options.length)) < state.last_page)
      check && dispatch(updateLastPage(state.last_page + 1))
    }
  }

  const onFinish = () => {
    const data = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      budget: state.budget
    }
    alert(JSON.stringify(data))
  }

  return (
    <div className="content-section-wizzard">
      <div>{content}</div>
      <div className="align-btn">
        {
          state.page > 1 && <div className="padding-btn">
            <button type="button" className="btn btn-color" onClick={onPreviousPage}>Atras</button>
          </div>
        }
        {
          state.page < state.last_page && <div className="padding-btn">
            <button type="button" className="btn btn-color" onClick={onNextPage}>Siguiente</button>
          </div>
        }
        {
          state.page === state.last_page && <div className="padding-btn">
            <button type="button" className="btn btn-color" onClick={onFinish}>Finalizar</button>
          </div>
        }
      </div>
    </div>
  );
};

export default SectionWizard;
