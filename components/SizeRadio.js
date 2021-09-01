const disabledStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: '10px 25px',
    fontSize: '16px',
    border: '2px solid #c5c5c5',
    borderRadius: '4px',
    margin: '1px',
    width: '118px',
    flexDirection: 'row',
}

export default function SizeRadio({ size, qty }) {
    return (
        <div>
            <input disabled={!qty} type='radio' id={size} name='sizes' value={size} />
            <label htmlFor={size} >EU {size}</label>
        </div>
    )
}