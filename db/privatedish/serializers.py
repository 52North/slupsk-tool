from wq.db.patterns import serializers as patterns
from .models import Privatedish, Composition


class CompositionSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Composition
        exclude = ('privatedish',)
        object_field = 'privatedish'
        wq_config = {
            'initial': 1,
        }


class PrivatedishSerializer(patterns.AttachedModelSerializer):
    compositions = CompositionSerializer(many=True, required=False)

    class Meta:
        model = Privatedish
        fields = "__all__"
