import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 16px;
  width: 320px;
`;

const RecipeCard = ({ recipe }) => (
  <StyledCard>
    <CardMedia
      component="img"
      alt={recipe.label}
      height="160"
      image={recipe.image}
      title={recipe.label}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {recipe.label}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Źródło: {recipe.source}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Kalorie: {Math.round(recipe.calories)}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Składniki: {recipe.ingredients.length}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default RecipeCard;
