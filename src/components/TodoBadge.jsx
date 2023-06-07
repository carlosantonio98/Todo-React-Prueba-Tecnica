import { PropTypes } from 'prop-types';

export const TodoBadge = ({ done }) => {
    done = done ? 1 : 0;

    const bgColors = [
        "bg-secondary",
        "bg-primary",
    ];

    const badgeTexts = [
        "pendiente",
        "completado",
    ]

    return (
        <span className={ "badge " + bgColors[ done ] }>{ badgeTexts[ done ] }</span>
    )
}

TodoBadge.propTypes =  {
    done: PropTypes.bool
}
