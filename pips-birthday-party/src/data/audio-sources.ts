/**
 * Real generated voice lines from Higgsfield (seed_audio TTS), one per
 * dialogue line in dialogue.ts. These are hosted on Higgsfield's CDN.
 *
 * The sandbox this project was built in blocks direct HTTPS access to
 * this CDN host, so the files could not be downloaded to public/audio/
 * locally. Remotion's <Audio> supports remote src directly, so these
 * URLs are wired in as-is and will resolve normally in any environment
 * with regular internet access (your machine, CI, etc).
 *
 * To make the project fully self-contained: download each URL below to
 * public/audio/line-NN.wav (matching the line number), then flip that
 * line to `true` in lineAudioAvailable (assets-manifest.ts).
 */
export const remoteAudioUrl: Record<number, string> = {
  1: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175814_5aaa240d-9eb9-4fc3-8ebb-1b9f368172f3.wav",
  2: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175849_6050e5de-b463-499f-80c9-1f98b3d419a1.wav",
  3: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175850_9a88b3ba-8832-4932-b859-2506d0fa83d3.wav",
  4: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175851_960150cb-6b17-4c4b-916d-afd909818d18.wav",
  5: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175851_25369895-db62-4c4c-8680-5766e123e0f7.wav",
  6: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175852_b52ebf83-53c7-4438-a8ce-1064314cab41.wav",
  7: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175853_f8c5e9e6-7774-4ea1-af39-b0387eecf439.wav",
  8: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180001_978cdd25-7d42-4d53-b55e-b946d5877232.wav",
  9: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180001_c770becf-0210-494c-b8dc-bf9b0f4b327d.wav",
  10: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180002_5b3a2405-accb-4e76-ad11-79ba6bca8f29.wav",
  11: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180003_912003c4-54ee-4ada-9a69-a5a091377b9f.wav",
  12: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180004_af5bfcf9-997d-4955-b7f4-8dd608e04449.wav",
  13: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180009_445b977c-2dcc-4da4-b250-1f5ff81c4228.wav",
  14: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180030_7954d59d-5871-47e4-9bc5-dde083d2cff7.wav",
  15: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180036_7c10ae44-feb9-49ca-b34a-e8f4101da170.wav",
  16: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180044_440b401b-98df-46b4-a650-0489d0ab7608.wav",
  17: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180048_6d69c7f2-afec-4b52-a446-a40e5a57a6f2.wav",
  18: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180053_5fa81fed-044e-4606-b5cb-2966dede6239.wav",
  19: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180058_dae4eb8b-27e8-4902-84db-10b5e924b8d0.wav",
  20: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180102_a43a9531-580f-4e15-96ce-926f1ad9302b.wav",
  21: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180107_40e58604-06c8-48c9-aae7-afb2400b0635.wav",
  22: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180113_548b3fdf-83bf-4674-b418-da178bf0d995.wav",
  23: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180121_f039f094-8caa-49ff-916d-02dcd118bc55.wav",
  24: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180125_8e4c5714-1d1b-4998-b247-4cece26246eb.wav",
  25: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175908_cac77686-868c-46f0-9683-7043653641fe.wav",
  26: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175910_fb1630e1-c4aa-4df2-8a09-ee3f3c1b4da6.wav",
  27: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175911_4632bfbe-2640-4365-9084-6d997ed9d03c.wav",
  28: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175911_8d0092a9-f887-4b55-ad80-bd99e8e85151.wav",
  29: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_175912_fc9cfba6-5e99-49c2-8443-a98a895e0e9c.wav",
  30: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180129_c48ac73c-a9cb-4bd8-a618-72694a6c5dfc.wav",
  31: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180133_b8f93973-ad7b-49d7-a016-bfabb5e27e91.wav",
  32: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180142_a29fa8b3-e51c-455e-b29a-03fb2cd03552.wav",
  33: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180148_1af5953e-4564-43ca-9a91-c604de138609.wav",
  34: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180151_935bfa25-4492-4bde-917a-8f3de0c14a84.wav",
  35: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180200_9ab3cd4e-afad-43c7-a6fa-d2fb314f256a.wav",
  36: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180205_f86b5232-11e1-4f98-9974-083d0175523f.wav",
  37: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180209_d15e9fc0-10aa-4f8e-a95d-5fa9e2c85ed0.wav",
  38: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260704_180219_aa7bb782-eb12-45e6-9217-45f022805fbf.wav",
};
