import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/profsergiocosta/data/main/filmes.json?token=GHSAT0AAAAAABRWGAKZ7O5PTURY6ODY5RSAYRORTXA',
});

export default api;
