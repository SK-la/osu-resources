// osu!framework 的片元着色器格式
uniform sampler2D m_Texture;
varying vec2 v_TexCoord;

void main(void)
{
    vec4 color = texture2D(m_Texture, v_TexCoord);
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(gray, gray, gray, color.a);
}