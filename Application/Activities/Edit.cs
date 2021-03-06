using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {

        public class Command : IRequest
        {
            public Activity Activity { get; set; }

        }

               public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x=>x.Activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                _dataContext = dataContext;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Activity activity = await _dataContext.Activities.FindAsync(request.Activity.Id);

                //بجای انتصاب تک تک فیلدها از اتومپر استفاده شده
                //activity.Title = request.Activity.Title ?? activity.Title;
                _mapper.Map(request.Activity, activity);

                await _dataContext.SaveChangesAsync();
                return Unit.Value;
            }
        }

    }
}