import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const articles = [
  {
    title: "Article 21",
    description: "Protection of life and personal liberty - No person shall be deprived of his life or personal liberty except according to procedure established by law."
  },
  {
    title: "Section 376, IPC",
    description: "Rape - Whoever commits rape shall be punished with rigorous imprisonment of not less than ten years, but may extend to imprisonment for life."
  },
  {
    title: "Section 302, IPC",
    description: "Punishment for murder - Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to a fine."
  },
  {
    title: "Section 120B, IPC",
    description: "Criminal Conspiracy - Whoever is a party to a criminal conspiracy to commit a punishable offense shall be punished as a conspirator."
  },
  {
    title: "Section 378, IPC",
    description: "Theft - Whoever intends to take dishonestly any moveable property out of the possession of any person without their consent is said to commit theft."
  },
  {
    title: "Unlawful Activities (Prevention) Act, 1967",
    description: "Terrorism - It aims to prevent unlawful activities and terrorist activities that pose a threat to the integrity and sovereignty of India."
  }
];

const Famous_Articles = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {articles.map((article, index) => (
        <Card key={index} style={{ minWidth: 300, maxWidth: 400, margin: '20px', backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {article.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Famous_Articles;