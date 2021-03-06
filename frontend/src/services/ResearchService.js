import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class ResearchService {
    getResearchList() {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/research');
    }

    getResearchDetails(id) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/research/' + id);
    }
}

export default new ResearchService();