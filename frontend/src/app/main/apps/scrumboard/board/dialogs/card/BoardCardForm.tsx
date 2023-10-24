import { useDebounce } from '@fuse/hooks';
import _ from '@lodash';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import format from 'date-fns/format';
import { Controller, useForm } from 'react-hook-form';
import { SyntheticEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';
import { closeCardDialog, removeCard, selectCardData, updateCard } from '../../../store/cardSlice';
import CardActivity from './activity/CardActivity';
import CardAttachment from './attachment/CardAttachment';
import CardChecklist from './checklist/CardChecklist';
import CardComment from './comment/CardComment';
import { selectListById } from '../../../store/listsSlice';
import { selectLabels } from '../../../store/labelsSlice';
import { selectBoard } from '../../../store/boardSlice';
import { selectMembers } from '../../../store/membersSlice';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import CheckListMenu from './toolbar/CheckListMenu';
import OptionsMenu from './toolbar/OptionsMenu';
import { CardType } from '../../../types/CardType';
import { LabelType, LabelsType } from '../../../types/LabelType';
import { MemberType, MembersType } from '../../../types/MemberType';
import { ChecklistsType } from '../../../types/ChecklistType';
import { CommentsType } from '../../../types/CommentType';

/**
 * The board card form component.
 */
function BoardCardForm() {
	const dispatch = useAppDispatch();
	const { data: board } = useAppSelector(selectBoard);
	const labels = useAppSelector(selectLabels);
	const members = useAppSelector(selectMembers);
	const card = useAppSelector(selectCardData) as CardType;
	const list = useAppSelector(selectListById(card?.listId));

	const { register, watch, control, setValue } = useForm<CardType>({ mode: 'onChange', defaultValues: card });

	const cardForm = watch();

	const updateCardData = useDebounce((newCard: CardType) => {
		dispatch(updateCard(newCard));
	}, 600);

	useEffect(() => {
		if (!card) {
			return;
		}
		if (!_.isEqual(card, cardForm)) {
			updateCardData(cardForm);
		}
	}, [card, cardForm, updateCardData]);

	useEffect(() => {
		register('attachmentCoverId');
	}, [register]);

	if (!card && !board) {
		return null;
	}

	return (
		<DialogContent className="flex flex-col sm:flex-row p-8">
			<div className="flex flex-auto flex-col py-16 px-0 sm:px-16">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
					<div className="mb-16 sm:mb-0 flex items-center">
						<Typography>{board.title}</Typography>

						<FuseSvgIcon size={20}>heroicons-outline:chevron-right</FuseSvgIcon>

						<Typography>{list && list.title}</Typography>
					</div>

					{cardForm.dueDate && (
						<DateTimePicker
							value={new Date(format(fromUnixTime(cardForm.dueDate), 'Pp'))}
							format="Pp"
							onChange={(val) => setValue('dueDate', getUnixTime(val))}
							className="w-full sm:w-auto"
							slotProps={{
								textField: {
									label: 'Due date',
									placeholder: 'Choose a due date',
									InputLabelProps: {
										shrink: true
									},
									fullWidth: true,
									variant: 'outlined'
								}
							}}
						/>
					)}
				</div>

				<div className="flex items-center mb-24">
					<Controller
						name="title"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Title"
								type="text"
								variant="outlined"
								fullWidth
								required
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											{card?.subscribed && (
												<FuseSvgIcon
													size={20}
													color="action"
												>
													heroicons-outline:eye
												</FuseSvgIcon>
											)}
										</InputAdornment>
									)
								}}
							/>
						)}
					/>
				</div>

				<div className="w-full mb-24">
					<Controller
						name="description"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Description"
								multiline
								rows="4"
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				</div>

				{cardForm.labels && cardForm.labels.length > 0 && (
					<div className="flex-1 mb-24 mx-8">
						<div className="flex items-center mt-16 mb-12">
							<FuseSvgIcon size={20}>heroicons-outline:tag</FuseSvgIcon>
							<Typography className="font-semibold text-16 mx-8">Labels</Typography>
						</div>
						<Autocomplete
							className="mt-8 mb-16"
							multiple
							freeSolo
							options={labels}
							getOptionLabel={(option: string | LabelType) => {
								if (typeof option === 'string') {
									return option;
								}
								return option?.title;
							}}
							value={cardForm.labels.map((id) => _.find(labels, { id })) as LabelsType}
							onChange={(event: SyntheticEvent<Element, Event>, value: (string | LabelType)[]) => {
								const ids = value
									.filter((item): item is LabelType => typeof item !== 'string')
									.map((item) => item.id);
								setValue('labels', ids);
							}}
							renderTags={(value, getTagProps) =>
								value.map((option, index) => {
									return (
										<Chip
											label={typeof option === 'string' ? option : option.title}
											{...getTagProps({ index })}
											className="m-3"
										/>
									);
								})
							}
							renderInput={(params) => (
								<TextField
									{...params}
									placeholder="Select multiple Labels"
									label="Labels"
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
								/>
							)}
						/>
					</div>
				)}

				{cardForm.memberIds && cardForm.memberIds.length > 0 && (
					<div className="flex-1 mb-24 mx-8">
						<div className="flex items-center mt-16 mb-12">
							<FuseSvgIcon size={20}>heroicons-outline:users</FuseSvgIcon>
							<Typography className="font-semibold text-16 mx-8">Members</Typography>
						</div>
						<Autocomplete
							className="mt-8 mb-16"
							multiple
							freeSolo
							options={members}
							getOptionLabel={(member: string | MemberType) => {
								return typeof member === 'string' ? member : member?.name;
							}}
							value={cardForm.memberIds.map((id) => _.find(members, { id })) as MembersType}
							onChange={(event: SyntheticEvent<Element, Event>, value: (string | MemberType)[]) => {
								const ids = value
									.filter((item): item is MemberType => typeof item !== 'string')
									.map((item) => item.id);
								setValue('memberIds', ids);
							}}
							renderTags={(value, getTagProps) =>
								value.map((option, index) => {
									if (typeof option === 'string') {
										return <span />;
									}
									return (
										<Chip
											label={option.name}
											{...getTagProps({ index })}
											className={clsx('m-3', option?.class)}
											avatar={
												<Tooltip title={option.name}>
													<Avatar src={option.avatar} />
												</Tooltip>
											}
										/>
									);
								})
							}
							renderInput={(params) => (
								<TextField
									{...params}
									placeholder="Select multiple Members"
									label="Members"
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
								/>
							)}
						/>
					</div>
				)}

				{cardForm.attachments && cardForm.attachments.length > 0 && (
					<div className="mb-24">
						<div className="flex items-center mt-16 mb-12">
							<FuseSvgIcon size={20}>heroicons-outline:paper-clip</FuseSvgIcon>
							<Typography className="font-semibold text-16 mx-8">Attachments</Typography>
						</div>
						<div className="flex flex-col sm:flex-row flex-wrap -mx-16">
							{cardForm.attachments.map((item) => (
								<CardAttachment
									item={item}
									card={cardForm}
									makeCover={() => {
										setValue('attachmentCoverId', item.id);
									}}
									removeCover={() => {
										setValue('attachmentCoverId', '');
									}}
									removeAttachment={() => {
										setValue('attachments', _.reject(cardForm.attachments, { id: item.id }));
									}}
									key={item.id}
								/>
							))}
						</div>
					</div>
				)}

				{cardForm.checklists &&
					cardForm.checklists.map((checklist, index) => (
						<CardChecklist
							key={checklist.id}
							checklist={checklist}
							index={index}
							onCheckListChange={(item, itemIndex) => {
								setValue(
									'checklists',
									_.setIn(cardForm.checklists, `[${itemIndex}]`, item) as ChecklistsType
								);
							}}
							onRemoveCheckList={() => {
								setValue('checklists', _.reject(cardForm.checklists, { id: checklist.id }));
							}}
						/>
					))}

				<div className="mb-24">
					<div className="flex items-center mt-16 mb-12">
						<FuseSvgIcon size={20}>heroicons-outline:chat-alt</FuseSvgIcon>
						<Typography className="font-semibold text-16 mx-8">Comment</Typography>
					</div>
					<div>
						<CardComment
							onCommentAdd={(comment) =>
								setValue('activities', [comment, ...cardForm.activities] as CommentsType)
							}
						/>
					</div>
				</div>

				<Controller
					name="activities"
					control={control}
					defaultValue={[]}
					render={({ field: { value } }) => (
						<div>
							{value.length > 0 && (
								<div className="mb-24">
									<div className="flex items-center mt-16">
										<FuseSvgIcon size={20}>heroicons-outline:clipboard-list</FuseSvgIcon>
										<Typography className="font-semibold text-16 mx-8">Activity</Typography>
									</div>
									<List>
										{value.map((item) => (
											<CardActivity
												item={item}
												key={item.id}
											/>
										))}
									</List>
								</div>
							)}
						</div>
					)}
				/>
			</div>

			<div className="flex order-first sm:order-last items-start sticky top-0">
				<Box
					className="flex flex-row sm:flex-col items-center sm:py-8 rounded-12 w-full"
					sx={{ backgroundColor: 'background.default' }}
				>
					<IconButton
						className="order-last sm:order-first"
						color="inherit"
						onClick={() => dispatch(closeCardDialog())}
						size="large"
					>
						<FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
					</IconButton>
					<div className="flex flex-row items-center sm:items-start sm:flex-col flex-1">
						<Controller
							name="dueDate"
							control={control}
							render={({ field: { onChange, value } }) => (
								<DueMenu
									onDueChange={onChange}
									onRemoveDue={() => onChange(null)}
									dueDate={value}
								/>
							)}
						/>

						<Controller
							name="labels"
							control={control}
							defaultValue={[]}
							render={({ field: { onChange, value } }) => (
								<LabelsMenu
									onToggleLabel={(labelId) => onChange(_.xor(value, [labelId]))}
									labels={value}
								/>
							)}
						/>

						<Controller
							name="memberIds"
							control={control}
							defaultValue={[]}
							render={({ field: { onChange, value } }) => (
								<MembersMenu
									onToggleMember={(memberId) => onChange(_.xor(value, [memberId]))}
									memberIds={value}
								/>
							)}
						/>

						<Controller
							name="attachments"
							control={control}
							defaultValue={[]}
							render={() => (
								<IconButton size="large">
									<FuseSvgIcon>heroicons-outline:paper-clip</FuseSvgIcon>
								</IconButton>
							)}
						/>

						<Controller
							name="checklists"
							control={control}
							defaultValue={[]}
							render={({ field: { onChange } }) => (
								<CheckListMenu
									onAddCheckList={(newList) => onChange([...cardForm.checklists, newList])}
								/>
							)}
						/>

						<OptionsMenu onRemoveCard={() => dispatch(removeCard())} />
					</div>
				</Box>
			</div>
		</DialogContent>
	);
}

export default BoardCardForm;
