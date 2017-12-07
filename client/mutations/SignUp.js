import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default gql`
	mutation SignUp($email: String, $password: String) {
		signup(email: $email, password: $password) {
			id
			email
		}
	}
`;
