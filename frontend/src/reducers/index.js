// Reducers
const testReducer = (currentState, action)=> {
	switch (action.type){
		case 'TESTE':
			return action.payload.teste;
		default:
			return 'First Value from testReducer';
	}
}

export default testReducer;