export default function SizeRadio({ size, qty }) {
    return (
        <div>
            <input disabled={!qty} type='radio' id={size} name='sizes' value={size} />
            <label htmlFor={size} >EU {size}</label>
        </div>
    )
}