let reactions = {
    '✨': 0, 
    '🎨': 0, 
    '🥺': 0, 
    '🌍': 0, 
    '😎': 0, 
    '👽': 0
}
//reading data whenever frontend requests to api/reactions
export async function GET() {
    return new Response(JSON.stringify(reactions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
//writing data
export async function POST(request) {
    //extract emoji in POST request
    const { emoji } = await request.json();
    if (reactions[emoji] !== undefined) {
        reactions[emoji] += 1;
    }
    return new Response(JSON.stringify(reactions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(request) {
    const { emoji } = await request.json();
    if (emoji && emoji in reactions && reactions[emoji] > 0) {
        // Decrease the count of the emoji reaction
        reactions[emoji] -= 1;
    }
    return new Response(JSON.stringify(reactions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}