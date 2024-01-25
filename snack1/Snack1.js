const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
  ];
/*
  let formatoTipografia =  vips.map((invitato ,index) => {
    invitato = {
      nomeTavolo : "Tavolo Vip",
      nomeInvitato : invitato ,
      nrPosto : index + 1
    }
    return invitato;

  });
  */
  let formatoTipografia =  vips.map((invitato ,index) => invitato = {nomeTavolo : "Tavolo Vip",nomeInvitato : invitato ,nrPosto : index + 1});
  console.table(formatoTipografia);