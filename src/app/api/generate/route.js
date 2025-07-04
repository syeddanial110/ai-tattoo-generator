import axios from 'axios';

export async function POST(request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return new Response(JSON.stringify({ message: 'Prompt is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        text_prompts: [
          {
            text: `${prompt}, professional tattoo design, high detail`,
            weight: 1,
          },
          {
            text: "blurry, low quality, text, watermark, signature",
            weight: -1,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer sk-7SUvd7bJmMd5kx9nfV4CtShfAKh2W7qFrhlCtj27noeqa9dY`,
          'Accept': 'application/json',
        },
      }
    );

    const imageBase64 = response.data.artifacts[0].base64;
    return new Response(JSON.stringify({
      imageUrl: `data:image/png;base64,${imageBase64}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Generation error:', error.response?.data || error.message);
    return new Response(JSON.stringify({
      message: 'Error generating image',
      error: error.response?.data?.message || error.message,
      suggestion: 'Please try again later or with a different prompt',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}